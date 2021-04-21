//create HTML string from here, dynamically create css with it?

function writeToFile (response){
    fs.writeFile('index.md', generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('Success!'))
};

const generateHtml = (response) => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>${Manager.getName()}</h1>
    
</body>
</html>
    `
}

module.exports = generateHtml

