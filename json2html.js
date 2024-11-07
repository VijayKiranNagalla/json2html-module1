// json2html.js

export default function json2html(data) {
    // Extract all unique keys to form the table headers
    const headers = [...new Set(data.flatMap(Object.keys))];
    
    // Build the table with `data-user` attribute
    let html = '<table data-user="vijaykiran123321@gmail.com">';
    
    // Create table headers
    html += '<thead><tr>' + headers.map(header => `<th>${header}</th>`).join('') + '</tr></thead>';
    
    // Create table rows for each object in `data`
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>' + headers.map(header => `<td>${row[header] || ''}</td>`).join('') + '</tr>';
    });
    html += '</tbody></table>';
  
    return html; // Return the HTML as a string
  }
  