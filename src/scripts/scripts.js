import { createClient } from '@supabase/supabase-js'

const url = 'https://fjgibaeypeqyqolnuytg.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZ2liYWV5cGVxeXFvbG51eXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNjE3MzAsImV4cCI6MjA1OTczNzczMH0.rCEMdusddLGjONemdT-FPhaG26mh7gBP2xjz328NEak'
const bucket = 'tracks'

// Create a single supabase client for interacting with your database
const supabase = createClient(url, key)

export function getTrackIds() {
    return [
        'Antisocialmedia.mp3',
        'bogosort.m4a',
        'luciferians.m4a',
        'microcosm copy.m4a'
    ];
}

export function getTrackPath(trackId) {
    console.log(trackId);
    const { data } = supabase.storage.from(bucket).getPublicUrl(trackId);
    console.log(data.publicUrl);
    return data.publicUrl;
}

// Upload file using standard upload
export async function uploadFile(file) {
  console.log(bucket, file);
  const { data, error } = await supabase.storage.from(bucket).upload(file.name, file)
  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("ts worked");
    return true;
  }
}