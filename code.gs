function doGet() {
  // Cargar la hoja de cálculo
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("menu");
  const data = sheet.getDataRange().getValues(); // Obtener todos los datos

  // Procesar los datos de la hoja
  const itemsByCategory = {};
  data.slice(1).forEach(row => {
    const [category, product, description, price, image] = row;
    if (!itemsByCategory[category]) {
      itemsByCategory[category] = [];
    }
    itemsByCategory[category].push({
      product,
      description,
      price,
      image: image, 
    });
  });

  // Crear la plantilla HTML
  const template = HtmlService.createTemplateFromFile("Index");
  template.title = "Menú del Restaurante"; // Definir el título
  template.itemsByCategory = itemsByCategory; // Pasar datos procesados
  return template
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setTitle("Menú del Restaurante")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); 
}
