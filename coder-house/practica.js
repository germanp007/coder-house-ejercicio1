import { promises as fs } from 'fs';

(async () => {
    
    try {
      
      const existingContent = await fs.readFile('./info.json', 'utf-8');
      const existingObject = JSON.parse(existingContent);
      existingObject.newProperty = 'Nuevo valor';
      const updatedContent = JSON.stringify(existingObject, null, 2);
       await fs.writeFile('./info.json', updatedContent);
      console.log('Contenido agregado exitosamente al archivo.');
    } catch (err) {
      console.error('Error:', err);
    }
  })();
