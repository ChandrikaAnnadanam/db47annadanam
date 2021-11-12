var Eagle = require('../models/Eagle');
// List of all Eagles
exports.Eagle_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Eagle list');
};
// for a specific Eagle.
exports.Eagle_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Eagle.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Eagle create on POST.
exports.Eagle_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Eagle create POST');
};
// Handle Eagle delete form on DELETE.
exports.Eagle_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Eagle delete DELETE ' + req.params.id);
};
// Handle Eagle update form on PUT.
exports.Eagle_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Eagle update PUT' + req.params.id);
};
// List of all Eagles
exports.Eagle_list = async function(req, res) {
    try{
    theEagles = await Eagle.find();
    res.send(theEagles);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Eagle_view_all_Page = async function(req, res) {
    try{
    theEagles = await Eagle.find();
    res.render('Eagle', { title: 'Eagle Search Results', results: theEagles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Eagle create on POST.
exports.Eagle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Eagle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Eagle_type":"goat", "cost":12, "size":"large"}
    document.Age = req.body.Age;
    document.colour = req.body.colour;
    document.weight = req.body.weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.Eagle_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Eagle.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Age)  
               toUpdate.Age = req.body.Age; 
        if(req.body.colour) toUpdate.colour = req.body.colour; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 