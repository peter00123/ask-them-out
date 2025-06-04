document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dateForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-container').style.display = 'none';

        // Gather form data
        const data = {
            location: document.getElementById('location').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            cuisine: document.getElementById('cuisine').value,
            cafe: document.getElementById('cafe').value,
            description: document.getElementById('description').value
        };

        // Create a summary element for rendering (DARK THEME)
        const summary = document.createElement('div');
        summary.style.padding = '32px 28px';
        summary.style.background = 'linear-gradient(135deg, #2d1a2e 60%, #3a2340 100%)';
        summary.style.display = 'inline-block';
        summary.style.fontFamily = "'Segoe UI', 'Dancing Script', cursive, Arial, sans-serif";
        summary.style.boxShadow = '0 8px 32px rgba(60, 20, 60, 0.28)';
        summary.style.border = '2px solid #e75480';
        summary.style.minWidth = '320px';
        summary.style.maxWidth = '90vw';
        summary.style.color = '#ffe4ec';
        summary.innerHTML = `
            <div style="text-align:center; margin-bottom:18px;">
                <span style="font-size:2.2em;">💖</span>
            </div>
            <h2 style="color:#ffb6c1; margin-bottom:18px; font-family:'Dancing Script', cursive, 'Segoe UI', Arial, sans-serif; font-size:2em; font-weight:700; letter-spacing:1px; text-shadow:0 2px 8px #0004;">
                Our Date Plan
            </h2>
            <div style="font-size:1.1em; line-height:1.7;">
                <p><strong style="color:#ffb6c1;">📍 Location:</strong> ${data.location || '<em>Not set</em>'}</p>
                <p><strong style="color:#ffb6c1;">📅 Date:</strong> ${data.date || '<em>Not set</em>'}</p>
                <p><strong style="color:#ffb6c1;">⏰ Time:</strong> ${data.time || '<em>Not set</em>'}</p>
                <p><strong style="color:#ffb6c1;">🍽️ Cuisine:</strong> ${data.cuisine || '<em>Not set</em>'}</p>
                <p><strong style="color:#ffb6c1;">☕ Cafe:</strong> ${data.cafe || '<em>Not set</em>'}</p>
                <p><strong style="color:#ffb6c1;">📝 Description:</strong> ${data.description || '<em>None</em>'}</p>
            </div>
            <div style="text-align:center; margin-top:18px;">
                <span style="font-size:1em;">💕please download share the image to me💕</span>
            </div>
            <br><br>
        `;

        // Hide the element off-screen for rendering
        summary.style.position = 'absolute';
        summary.style.left = '-9999px';
        document.body.appendChild(summary);

        html2canvas(summary).then(canvas => {
            const imageResult = document.getElementById('imageResult');
            imageResult.innerHTML = '';
            imageResult.appendChild(canvas);

            // Create download icon button
            const downloadBtn = document.createElement('button');
            downloadBtn.title = "Download Image";
            downloadBtn.style.background = "none";
            downloadBtn.style.border = "none";
            downloadBtn.style.cursor = "pointer";
            downloadBtn.style.marginTop = "16px";
            downloadBtn.style.display = "inline-block";
            downloadBtn.innerHTML = `

                <svg width="36" height="36" viewBox="0 0 24 24" fill="#ffb6c1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V4M12 16l-4-4m4 4l4-4M4 20h16" stroke="#ffb6c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                </svg>


            `;

            downloadBtn.onclick = function() {
                const link = document.createElement('a');
                link.download = 'date-plan.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            };
            imageResult.appendChild(downloadBtn);

            document.body.removeChild(summary);
        });
    });
});