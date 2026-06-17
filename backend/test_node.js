const SUPABASE_URL = 'https://cikaeialdcyxniwxtmzl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpa2FlaWFsZGN5eG5pd3h0bXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMjk2MjMsImV4cCI6MjA4NTYwNTYyM30.BtcIqTyIR4QZLNG6fYq-bQ3pY3xmjITzDTN9Z4SiOvQ';

async function test() {
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/conference_settings?select=setting_key&limit=1`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            }
        });
        const data = await response.json();
        console.log("Status:", response.status);
        console.log("Data:", data);
    } catch (e) {
        console.error("Error:", e);
    }
}
test();
