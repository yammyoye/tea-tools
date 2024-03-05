class TeaTools {
    constructor(name) {
      this.name = name || 'Tea Set';
      this.tools = [];
    }
  
    addTool(tool) {
      this.tools.push(tool);
      console.log(`${tool} added to the ${this.name}.`);
    }
  
    removeTool(tool) {
      const index = this.tools.indexOf(tool);
      if (index !== -1) {
        this.tools.splice(index, 1);
        console.log(`${tool} removed from the ${this.name}.`);
      } else {
        console.log(`${tool} not found in the ${this.name}.`);
      }
    }
  
    displayTools() {
      console.log(`${this.name} tools:`);
      if (this.tools.length === 0) {
        console.log('The tea set is empty.');
      } else {
        this.tools.forEach((tool, index) => {
          console.log(`${index + 1}. ${tool}`);
        });
      }
    }
  }
  
  // Example usage
  const myTeaSet = new TeaTools('Classic Tea Set');
  
  myTeaSet.addTool('Teapot');
  myTeaSet.addTool('Tea Strainer');
  
  myTeaSet.displayTools();
  
  myTeaSet.removeTool('Teacups');
  
  myTeaSet.displayTools();
  