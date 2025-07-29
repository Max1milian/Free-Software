async function loadPage(page) {
    try {
      const response = await fetch(page);
      if (!response.ok) {
        throw new Error(`Seite ${page} konnte nicht geladen werden: ${response.status}`);
      }
      const content = await response.text();
      document.getElementById('content').innerHTML = content;
    } catch (error) {
      document.getElementById('content').innerHTML = `<p style="color:red;">Fehler: ${error.message}</p>`;
    }
  }
  