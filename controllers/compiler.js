const compiler = require('compilex');
const options = {stats: true};
compiler.init(options);

module.exports.compileCode = async function(req, res){
    try{
        var inputData = req.body.inputData;
        var inputCheck= req.body.inputCheck;
        var code= req.body.code;
        var language = req.body.language;

        if(language==='C' ){
            var envData = {OS : "linux", cmd : "gcc"};
            if(inputCheck==='true'){
                compiler.compileCPPWithInput(envData,code,inputData,function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            return res.render('home',{
                                code: code,
                                output: data.output,
                                input: inputData
                            })
                        }
                    }
                )
            }
            else{
                compiler.compileCPP(
                    envData,
                    code,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            return res.render('home',{
                                code: code,
                                output: data.output,
                                input: inputData
                            })
                        }
                    }
                )
            }
        }
        
        if(language==="Python"){
            var envData = {OS : "linux"};
            if(inputCheck==="true"){
                compiler.compilePythonWithInput(
                    envData,
                    code,
                    inputData,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            return res.render('home',{
                                code: code,
                                output: data.output,
                                input: inputData
                            })
                        }
                    }
                )
            }
            else{
                compiler.compilePython(
                    envData,
                    code,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            return res.render('home',{
                                code: code,
                                output: data.output,
                                input: inputData
                            })
                        }
                    }
                )
            }
        }
       
        if(language==="JAVA"){
            var envData = {OS : "linux"};
            if(inputCheck==="true"){
                compiler.compileJavaWithInput(
                    envData,
                    code,
                    inputData,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            return res.render('home',{
                                code: code,
                                output: data.output,
                                input: inputData
                            })
                        }
                    }
                )
            }
            else{
                compiler.compileJava(envData,code,function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            return res.render('home',{
                                code: code,
                                output: data.output,
                                input: inputData
                            })
                        }
                    }
                )
            }
            
        }
    }
    catch(err){
        console.log(err);
    }
}

