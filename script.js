
    function handleok() {
        let NAME = document.getElementById('name').value;
        let CLASS = document.getElementById('class').value;
        let SEM = document.getElementById('sem').value;
        let DOB = document.getElementById('dob').value;
        let MOBILE = document.getElementById('mobile').value;
        let EMAIL = document.getElementById('email').value;
        let BATCH = document.getElementById('batch').value;
        let object = { NAME,CLASS,SEM,DOB,MOBILE,EMAIL,BATCH};

        let data = JSON.parse(localStorage.getItem("MARKSHEET")) || [];
        data.push(object);

        localStorage.setItem("MARKSHEET", JSON.stringify(data));
        call();
    }
    call();

    function call() {
        let data = JSON.parse(localStorage.getItem("MARKSHEET")) || [];
        document.getElementById('box').innerHTML =
            data.map(i => (
                `<div>
                <table>
        <tr>
            <td> NAME : </td>
            <td><p>${i.NAME} </p></td>
        </tr>
        <tr>
            <td> CLASS : </td>
            <td><p> ${i.CLASS}</p></td>
        </tr>
        <tr>
            <td> SEM : </td>
            <td><p> ${i.SEM}</p></td>
        </tr>
        <tr>
            <td> DOB : </td>
            <td><p> ${i.DOB}</p></td>
        </tr>
        <tr>
            <td> MOBILE : </td>
            <td><p> ${i.MOBILE}</p></td>
        </tr>
        <tr>
            <td> EMAIL : </td>
            <td><p> ${i.EMAIL}</p></td>
        </tr>
        <tr>
            <td> BATCH : </td>
            <td><p> ${i.BATCH}</p></td>
        </tr>
    </table>
            </div>`
            )).join("");
    }
