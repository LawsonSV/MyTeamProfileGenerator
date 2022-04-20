const starterHtml = () => {
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <h1 id="title">My Team</h1>
</body>

</html>`
}

const generateManager = ({name, id, email, phone}) => {
return `<div class="card">
<div class="card-body">
    <h5 class="card-title">${name}: Manager</h5>
    <h6 class="card-text">ID: ${id}</h6>
    <h6 class="card-text">Email: ${email}</h6>
    <h6 class="card-text">Office Phone Number: ${phone}</h6>
</div>
</div>`
}

const generateEngineer = ({name, id, email, github}) => {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${name}: Manager</h5>
        <h6 class="card-text">ID: ${id}</h6>
        <h6 class="card-text">Email: ${email}</h6>
        <h6 class="card-text">Office Phone Number: ${github}</h6>
    </div>
    </div>`
}

const generateIntern = ({name, id, email, school}) => {
    return `<div class="card">
    <div class="card-body">
        <h5 class="card-title">${name}: Manager</h5>
        <h6 class="card-text">ID: ${id}</h6>
        <h6 class="card-text">Email: ${email}</h6>
        <h6 class="card-text">Office Phone Number: ${school}</h6>
    </div>
    </div>`
}

module.exports = starterHtml
module.exports = generateManager
module.exports = generateEngineer
module.exports = generateIntern