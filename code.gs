const CACHE_KEY = 'menu_html_cache';
const CACHE_DURATION = 21600; // 6 horas (máximo de Apps Script Cache)

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🍽️ Menú')
    .addItem('↺ Actualizar caché', 'clearMenuCache')
    .addToUi();
}

function doGet(e) {
  // Si viene el parámetro ?flush=1, limpiar el caché
  if (e && e.parameter && e.parameter.flush === '1') {
    clearMenuCache();
    return HtmlService.createHtmlOutput('<p>✅ Caché limpiado correctamente. <a href="' + ScriptApp.getService().getUrl() + '">Volver al menú</a></p>');
  }

  const cache = CacheService.getScriptCache();
  const cached = cache.get(CACHE_KEY);

  if (cached) {
    // Servir desde caché
    return HtmlService.createHtmlOutput(cached)
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
      .setTitle("Menú del Restaurante")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  // Si no hay caché, generarlo
  const html = buildMenuHtml();

  // Guardar en caché solo si no supera los 100KB
  try {
    cache.put(CACHE_KEY, html, CACHE_DURATION);
  } catch (err) {
    console.warn('No se pudo guardar en caché (HTML demasiado grande):', err.message);
  }

  return HtmlService.createHtmlOutput(html)
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setTitle("Menú del Restaurante")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function buildMenuHtml() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("menu");
  const data = sheet.getDataRange().getValues();

  const itemsByCategory = {};
  data.slice(1).forEach(row => {
    const [category, product, description, price, image] = row;
    if (!itemsByCategory[category]) {
      itemsByCategory[category] = [];
    }
    itemsByCategory[category].push({ product, description, price, image });
  });

  const template = HtmlService.createTemplateFromFile("Index");
  template.title = "Menú del Restaurante";
  template.itemsByCategory = itemsByCategory;
  return template.evaluate().getContent();
}

function clearMenuCache() {
  CacheService.getScriptCache().remove(CACHE_KEY);
  SpreadsheetApp.getUi().alert('✅ Caché limpiado. La próxima visita al menú regenerará todo.');
}
