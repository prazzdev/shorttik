// ALl Keys
const key = {
    goobyKey: "6InUqZOW73pW",
    p1rs: "CpogPu4QBx5Pab2Fe3XtIevwRBdfN43U",
    cuttly: "3271f13baa03ece084c4341abeed593247cc5"
}

$('#serviceOpt').on('change', function(){

    const selectedPackage = $('#serviceOpt').val();
    // $('#selected').text(selectedPackage);
    let url = $('#linkToShort').val()
    
    $('#shorten').on('click', () => {
        $('progress').removeClass('hidden')
        let option = selectedPackage
        switch (option){
            case 'gooby':
                $.ajax({
                    type: 'GET',
                    url: `https://goo.by/api/?key=${key.goobyKey}&url=${url}`,
                    dataType: 'JSON'
                ,
                success: (result) => {
                    console.log(result)
                }})
                break
            case 'vurl':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/vurl?link=${url}`,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        "Access-Control-Allow-Origin": "*",
                        // "Access-Control-Allow-Credentials": "true",
                        // "Access-Control-Allow-Headers": "content-type"
                    },
                    dataType: 'JSON'
                ,
                success: (result) => {
                    console.log(result)
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    const res = $('#resultLink').val(result.hasil)
                    $('#copy').on('click', () => {
                        res.select();
                        res.setSelectionRange(0, 99999); // For mobile devices

                        // Copy the text inside the text field
                        navigator.clipboard.writeText(res.value);

                        // Alert the copied text
                        alert("Copied the text: " + res.value);
                    })
                }})
                break
            case 'p1rs':
                $.ajax({
                    type: 'GET',
                    url: `https://goo.by/api/?key=${key.p1rs}&url=${url}`,
                    dataType: 'JSON'
                ,
                success: (result) => {
                    console.log(result)
                }})
                break
            case 'rebrandly':
                const options = {
                    method: 'POST',
                    headers: {
                      accept: 'application/json',
                      'content-type': 'application/json',
                      apikey: 'ef79d7d2bd714c75b0f7757a592f2ed2'
                    },
                    body: JSON.stringify({destination: url})
                  };
                  
                fetch('https://api.rebrandly.com/v1/links', options)
                .then(response => response.json())
                .then(response => {
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    const res = $('#resultLink').val(response.shortUrl)
                    $('#copy').on('click', () => {
                        res.select();
                        res.setSelectionRange(0, 99999); // For mobile devices

                        // Copy the text inside the text field
                        navigator.clipboard.writeText(res.value);
                    })
                })
                .catch(err => console.error(err));

                break
            case 'isgd':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/isgd?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (result) => {
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    const res = $('#resultLink').val(result.hasil.shorturl)
                    $('#copy').on('click', () => {
                        res.select();
                        res.setSelectionRange(0, 99999); // For mobile devices

                        // Copy the text inside the text field
                        navigator.clipboard.writeText(res.value);

                        // Alert the copied text
                        alert("Copied the text: " + res.value);
                    })
                }})
                break
            case 'cuttly':
                $.ajax({
                    type: 'GET',
                    url: `https://cutt.ly/api/api.php?key=${key.cuttly}&short=${url}`,
                    dataType: 'JSON'
                ,
                success: (result) => {
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    const res = $('#resultLink').val(result.url.shortLink)
                    $('#copy').on('click', () => {
                        res.select();
                        res.setSelectionRange(0, 99999); // For mobile devices

                        // Copy the text inside the text field
                        navigator.clipboard.writeText(res.value);
                    })
                }})
                break
            case 'tinyurl':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/tinyurl?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (result) => {
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    const res = $('#resultLink').val(result.hasil)
                    $('#copy').on('click', () => {
                        res.select();
                        res.setSelectionRange(0, 99999); // For mobile devices

                        // Copy the text inside the text field
                        navigator.clipboard.writeText(res.value);
                    })
                }})
                break
            case 'clppw':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/clp?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (result) => {
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    const res = $('#resultLink').val(result.hasil.url)
                    $('#copy').on('click', () => {
                        res.select();
                        res.setSelectionRange(0, 99999); // For mobile devices

                        // Copy the text inside the text field
                        navigator.clipboard.writeText(res.value);
                    })
                }})
                break
            case 'vgd':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/vgd?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (result) => {
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    const res = $('#resultLink').val(result.hasil.shorturl)
                    $('#copy').on('click', () => {
                        res.select();
                        res.setSelectionRange(0, 99999); // For mobile devices

                        // Copy the text inside the text field
                        navigator.clipboard.writeText(res.value);
                    })
                }})
                break
        }
    })

    

    // console.log(x)

    // isi input hasil dengn result
    $('#resultLink').val(selectedPackage)

    });


const title = () => {
    return `Shortik`
}