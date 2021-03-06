window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function () { }
  nodes.html = function () { }
  return nodes
}

window.jQuery.ajax = function ({ url, method, body, headers }) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    for (let key in headers) {
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          console.log('说明请求成功')
          resolve.call(undefined, request.responseText)
        } else if (request.status >= 400) {
          console.log('说明请求失败')
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}

window.$ = window.jQuery

myButton.addEventListener('click', function (e) {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'frank': '18'
    }
  }).then(
    (text) => { console.log(text) },
    (request) => { console.log(request) }
  )
})