({
   openModel: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
      component.set("v.isOpen", true);
   },
 
   closeModel: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
      component.set("v.isOpen", false);
      component.set("v.returnValue", "You clicked the ‘Cancel’ button");
      console.log("Hello from debug mode");
   },
 
   confirmModel: function(component, event, helper) {
      // set the "isOpen" attribute to "False for close the model Box.
      component.set("v.isOpen", false);
      component.set("v.returnValue", "You clicked the ‘Confirm’ button");
   },
})