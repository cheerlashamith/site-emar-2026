-- Fix for: Registration and Login Loop Bug
-- Run this in the Supabase SQL Editor to secure and fix the users table

-- 1. Enable Row Level Security on the users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- 2. Allow users to insert their own record (requires Email Confirmations to be OFF in Supabase Auth settings)
DROP POLICY IF EXISTS "Users can insert their own record" ON public.users;
CREATE POLICY "Users can insert their own record" 
ON public.users 
FOR INSERT 
WITH CHECK (auth.uid() = auth_id);

-- 3. Allow users to view their own record (This fixes the redirect loop!)
DROP POLICY IF EXISTS "Users can view their own record" ON public.users;
CREATE POLICY "Users can view their own record" 
ON public.users 
FOR SELECT 
USING (auth.uid() = auth_id);

-- 4. Allow users to update their own record
DROP POLICY IF EXISTS "Users can update their own record" ON public.users;
CREATE POLICY "Users can update their own record" 
ON public.users 
FOR UPDATE 
USING (auth.uid() = auth_id);
