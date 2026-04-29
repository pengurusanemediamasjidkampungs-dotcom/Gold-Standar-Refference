/**
 * script.js - Sovereign IDE Core Logic
 * Focus: Performance, Offline AI Bridge, & Iterative Polish
 */

// --- 1. Konfigurasi & State ---
const State = {
    currentFile: 'index.html',
    isDirty: false,
    lastSaved: null,
};

// --- 2. Pemilihan Elemen DOM ---
const editor = document.getElementById('code-editor');
const previewFrame = document.getElementById('output-frame');
const btnRun = document.querySelector('.primary');

// --- 3. Engine Utama: Compiler/Renderer ---
/**
 * Mengemaskini paparan Preview secara real-time.
 * Menggunakan srcdoc untuk kelajuan render maksimum.
 */
function runEngine() {
    const code = editor.value;
    const documentContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body { font-family: sans-serif; padding: 20px; }
                    /* Style tambahan dari user akan masuk di sini */
                </style>
            </head>
            <body>
                ${code}
                <script>
                    // Menangkap error dari dalam iframe untuk debugging
                    window.onerror = function(msg) {
                        console.error("Preview Error: " + msg);
                    };
                </script>
            </body>
        </html>
    `;
    
    previewFrame.srcdoc = documentContent;
    console.log("🚀 Engine: Preview Updated.");
}

// --- 4. Debounce Logic (Penjimatan CPU/RAM) ---
/**
 * Memastikan fungsi runEngine tidak dipanggil terlalu kerap.
 * Hanya dijalankan 500ms selepas pengguna berhenti menaip.
 */
function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const processChange = debounce(() => runEngine());

// --- 5. AI Oracle Bridge (Offline Ollama) ---
/**
 * Struktur komunikasi dengan AI lokal.
 * Tekan Ctrl + Space untuk trigger (Logik masa hadapan).
 */
const Oracle = {
    endpoint: "http://localhost:11434/api/generate",
    
    async askAI(userPrompt) {
        console.log("🤖 Oracle: Thinking...");
        try {
            // Nota: Pastikan OLLAMA_ORIGINS="*" telah di-set di WSL
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: "deepseek-coder:1.3b", // Model paling ringan untuk 8GB RAM
                    prompt: `Task: Polish this HTML/CSS code for efficiency: ${editor.value}\nInstruction: ${userPrompt}`,
                    stream: false
                })
            });
            const data = await response.json();
            return data.response;
        } catch (err) {
            return "/* Error: Ollama Offline. Sila mulakan servis di WSL. */";
        }
    }
};

// --- 6. Event Listeners ---

// Input listener dengan Debounce
editor.addEventListener('input', () => {
    State.isDirty = true;
    processChange(); // Update preview secara automatik
});

// Shortcut Keyboard: Ctrl + Enter untuk manual Run
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        runEngine();
    }
    
    // Shortcut Keyboard: Ctrl + Space untuk AI Polish
    if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        const cmd = prompt("AI Instruction (e.g., 'Make it modular', 'Fix syntax'):");
        if (cmd) {
            Oracle.askAI(cmd).then(suggestion => {
                console.log("✨ Oracle Suggestion Received.");
                // Paparkan cadangan dalam console/tab baru (Logik polish)
                alert("AI Suggestion: \n" + suggestion);
            });
        }
    }
});

// Init
window.addEventListener('DOMContentLoaded', () => {
    // Default Boilerplate untuk rujukan awal
    editor.value = `<h1>Hello World</h1>\n<p>Mula membina modul anda di sini...</p>`;
    runEngine();
});

// --- 7. Status Bar Metrics ---
function updateMetrics() {
    const text = editor.value;
    const lines = text.split('\n').length;
    const chars = text.length;
    document.querySelector('.left-metrics span:first-child').innerText = `Ln ${lines}, Col ${chars}`;
}

editor.addEventListener('keyup', updateMetrics);
editor.addEventListener('click', updateMetrics);
