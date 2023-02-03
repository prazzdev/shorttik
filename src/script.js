// ALl Keys
const key = {
    goobyKey: "6InUqZOW73pW",
    p1rs: "CpogPu4QBx5Pab2Fe3XtIevwRBdfN43U",
    cuttly: "3271f13baa03ece084c4341abeed593247cc5"
}

const modal = (data) => 
`<label for="modal" class="btn">Result</label>

<input type="checkbox" id="modal" class="modal-toggle" />
<label for="modal" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold mb-4">Link berhasil dibuat!</h3>
    <div class="h-fit flex justify-center items-center">
        <input type="text" name="resultLink" id="resultLink" class="input input-bordered rounded-md w-full max-w-fit text-center" value="${data}" />
    </div>
  </label>
</label>`

$('#serviceOpt').on('change', function(){

    const selectedPackage = $('#serviceOpt').val();
    let url = $('#linkToShort').val()
    
    $('#shorten').on('click', () => {
        $('progress').removeClass('hidden')
        let option = selectedPackage
        switch (option){
            case 'bitly':
                $.ajax({
                    type: 'POST',
                    url: `https://api-ssl.bitly.com/v4/shorten`,
                    headers: {
                        'Authorization': 'Bearer 1f8babb234580a30079208105bbfbe9d50ef0d51',
                    },
                    dataType: 'JSON',
                    body: {
                        "domain": "bit.ly",
                        "group_guid": "Bl3ecjhH97k",
                        "long_url": "https://stackoverflow.com/questions/14010851/set-request-header-jquery-ajax"
                    }
                ,
                success: (result) => {
                    console.log(result.data)
                }})
                break
            case 'gooby':
                $.ajax({
                    type: 'GET',
                    url: `https://goo.by/api/?key=${key.goobyKey}&url=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.short
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
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
                success: (response) => {
                    const result = response.hasil
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
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
                    const result = response.shortUrl
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                })
                .catch(err => console.error(err));

                break
            case 'isgd':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/isgd?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.hasil.shorturl
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case 'cuttly':
                $.ajax({
                    type: 'GET',
                    url: `https://cutt.ly/api/api.php?key=${key.cuttly}&short=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.url.shortLink
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case 'tinyurl':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/tinyurl?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.hasil
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case 'clppw':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/clp?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.hasil.url
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case 'vgd':
                $.ajax({
                    type: 'GET',
                    url: `https://api.akuari.my.id/short/vgd?link=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.hasil.shorturl
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case 'shrtcode':
                $.ajax({
                    type: 'GET',
                    url: `https://api.shrtco.de/v2/shorten?url=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.result.short_link
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case '9qrde':
                $.ajax({
                    type: 'GET',
                    url: `https://api.shrtco.de/v2/shorten?url=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.result.short_link2
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case 'shinylink':
                $.ajax({
                    type: 'GET',
                    url: `https://api.shrtco.de/v2/shorten?url=${url}`,
                    dataType: 'JSON'
                ,
                success: (response) => {
                    const result = response.result.short_link3
                    $('#linkToShort').val(null) 
                    $('#serviceOpt').val('')
                    $('#progress').addClass('hidden')
                    $('.result-link').removeClass('hidden')
                    $('.result-link').html(modal(result))
                }})
                break
            case '':
                $('#progress').addClass('hidden')
                const res = $('.result-link').html('<h1 class="font-bold">The selection is not working! Try other.</h1>')
                res.removeClass('hidden')
                break
        }
    })

    });


const title = () => {
    return `Shortik`
}