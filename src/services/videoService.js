// Contrato entre o nosso Front e o BackEnd
import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://msdvkgndruksrljhnbbt.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZHZrZ25kcnVrc3JsamhuYmJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0Mjc0MjQsImV4cCI6MTk4NDAwMzQyNH0.-3Oou9yBgU3yuVAiiK1XuYVwV32WJdlWvpuZ88f2u6k";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}