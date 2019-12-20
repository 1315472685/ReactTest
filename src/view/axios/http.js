import request from './server'
export function postFn(url, data, headers) {
  return request({
    url: `${url}`,
    method: 'post',
    data: data,
    headers
  })
}

export function getFn(url, data, headers) {
  return request({
    url: `${url}`,
    method: 'get',
    params: data,
    headers
  })
}
