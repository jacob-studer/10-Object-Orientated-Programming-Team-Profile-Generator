const generateHtml = () => {
    return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap" rel="stylesheet">
    
        <title>Team Builder Pro</title>
    </head>
    
    <body>

    <h1>Team Builder Pro</h1>
    <h2>The Command Line Team Builder</h2>
    
        <div>${generateManager}</div>

        <div>${generateIntern}</div>
        
        <div>${generateEngineer}</div>
    
    

    
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
        
    </body>
    
    </html>`
}

//import input answers 
const generateManager = () => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${manager.managerName}</h5>
        <h6 class="card-subtitle mb-2">${manager.getRole()}</h6>
    <div>
    <div>
        <p class="card-text">ID: ${manager.managerId}</p>
        <p>Email: ${manager.managerEmail}</p><a href="#" class="card-link"></a>
        <p>OfficerNumber: ${manager.officeNumber}</p>
    </div>
</div>
`
};

const generateIntern = () => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${intern.internName}</h5>
        <h6 class="card-subtitle mb-2">${intern.getRole()}</h6>
    <div>
    <div>
        <p class="card-text">ID: ${intern.internId}</p>
        <p>Email: ${intern.internEmail}</p><a href="#" class="card-link"></a>
        <p>School: ${intern.internSchool}</p>
    </div>
</div>
`
};

const generateEngineer = () => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${engineer.engineerName}</h5>
        <h6 class="card-subtitle mb-2">${engineer.getRole()}</h6>
    <div>
    <div>
        <p class="card-text">ID: ${engineer.internId}</p>
        <p>Email: ${engineer.engineerEmail}</p><a href="#" class="card-link"></a>
        <p>Github: ${engineer.engineerGitHub}</p>
    </div>
</div>
`
};

module.exports = generateHtml