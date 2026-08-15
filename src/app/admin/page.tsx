// src/app/admin/page.tsx - VERSION CLIENT AVEC AUTHENTIFICATION SIMPLE
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Lead {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  company_name: string | null;
  sector: string | null;
  solution_slug: string | null;
  message: string;
  consent_at: string;
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Vérifier si déjà authentifié au chargement
  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('admin_auth', 'true');
        setIsAuthenticated(true);
        fetchLeads();
      } else {
        setError(data.error || 'Mot de passe incorrect.');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur.');
    }
  };

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/admin/leads');
      const data = await response.json();
      
      if (response.ok) {
        setLeads(data.leads || []);
      } else {
        setError(data.error || 'Impossible de charger les leads.');
      }
    } catch (err) {
      setError('Erreur lors du chargement des données.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    setLeads([]);
  };

  // --- ÉCRAN DE CONNEXION ---
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-brand-dark">
        <div className="w-full max-w-md bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold font-urbanist text-brand-dark dark:text-white mb-2">Administration HoplaTech</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-kanit">Connectez-vous pour accéder aux leads.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
              <p className="text-red-700 dark:text-red-400 font-bold font-kanit text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 font-kanit text-brand-dark dark:text-white">Mot de passe</label>
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez le mot de passe admin"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2a2a2a] focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-kanit text-brand-dark dark:text-white"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg font-kanit"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-500 hover:text-brand-primary transition-colors font-kanit">
              ← Retour au site
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // --- DASHBOARD DES LEADS ---
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-brand-dark p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* En-tête Dashboard */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold font-urbanist text-brand-dark dark:text-white">Dashboard Leads</h1>
            <p className="text-gray-600 dark:text-gray-400 font-kanit mt-1">{leads.length} lead(s) reçu(s)</p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={fetchLeads} 
              disabled={loading}
              className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors font-kanit text-brand-dark dark:text-white disabled:opacity-50"
            >
              {loading ? 'Chargement...' : 'Actualiser'}
            </button>
            <button 
              onClick={handleLogout} 
              className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg font-bold text-sm hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors font-kanit"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Tableau des Leads */}
        {loading ? (
          <div className="text-center py-20 text-gray-500 font-kanit">Chargement des leads...</div>
        ) : leads.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 font-kanit text-lg">Aucun lead pour le moment.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-[#2a2a2a] border-b border-gray-200 dark:border-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-kanit">Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-kanit">Nom</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-kanit">Email</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-kanit">Solution</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-kanit">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-kanit whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-brand-dark dark:text-white font-kanit">
                        {lead.first_name} {lead.last_name}
                        {lead.company_name && (
                          <span className="block text-xs font-normal text-gray-500 dark:text-gray-400 mt-1">{lead.company_name}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-brand-primary font-kanit">
                        <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                        {lead.phone && (
                          <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{lead.phone}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-kanit capitalize">
                        {lead.solution_slug?.replace(/-/g, ' ') || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 font-kanit max-w-xs truncate" title={lead.message}>
                        {lead.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}