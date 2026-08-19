// Supabase integration — optional module for self-service image management
// Only enable if client has purchased the self-service add-on
// Set siteConfig.supabase.enabled = true to activate

import { siteConfig } from '../config/site.config.js';

let supabase = null;

export const initSupabase = async () => {
  if (!siteConfig.supabase.enabled) {
    console.log('Supabase integration disabled');
    return null;
  }

  // Lazy load supabase library only if enabled
  const { createClient } = await import('@supabase/supabase-js');

  supabase = createClient(
    siteConfig.supabase.url,
    siteConfig.supabase.anonKey
  );

  return supabase;
};

export const getSupabaseClient = () => supabase;

// Placeholder functions for admin features
export const fetchClientImages = async () => {
  if (!supabase) return [];
  // TODO: Fetch from supabase storage + images table
};

export const uploadImage = async (file, slotKey) => {
  if (!supabase) return null;
  // TODO: Upload to storage, update images table with slot_key
};

export const listImageSlots = async () => {
  if (!supabase) return [];
  // TODO: Query client's available image_slot entries
};
