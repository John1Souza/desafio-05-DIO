import axios from "axios";
export const api = axios.create({
    baseURL: 'https://ptrcmjzpgowrjuukjple.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0cmNtanpwZ293cmp1dWtqcGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM2ODA5NTUsImV4cCI6MTk3OTI1Njk1NX0.XUoGbuPq8wM_YwNBl46dq7p1p0FWhxfx0JNAIs0lLzM",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0cmNtanpwZ293cmp1dWtqcGxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM2ODA5NTUsImV4cCI6MTk3OTI1Njk1NX0.XUoGbuPq8wM_YwNBl46dq7p1p0FWhxfx0JNAIs0lLzM"
    }
})