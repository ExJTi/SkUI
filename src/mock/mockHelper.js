import Mock from 'mockjs'

const mockHelper = {
  mockList: function (mockEntity, min, max) {
    let range = min
    if (max !== undefined) { range += `-${max}` }
    return Mock.mock({ [`list|${range}`]: [mockEntity] }).list
  },
  mockDetail: function (mockEntity) {
    return Mock.mock(mockEntity)
  },
  mockResponse: function (res) {
    const { content = {}, status = 'SUCCESS', message = null, ...obj } = res
    return { content, status, message, ...obj }
  },
  use: function (object, include = []) {
    for (const key in object) {
      if (object.hasOwnProperty(key) && (!include.length || include.includes(key))) {
        const obj = object[key];
        // const url = new RegExp(`${key}$`)
        if (typeof obj === 'function') {
          Mock.mock(new RegExp(`${key}$`), 'post', obj)
        } else if (typeof obj === 'object') {
          Mock.mock(new RegExp(`${key}$`), obj.method || 'post', obj.handler)
        }
      }
    }
  }
}

export default mockHelper

const mockPattern = {
  IP: '@ip',
  ID: '@id',
  MAC: /[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}/,
  SERVER_STATE: ['ONLINE', 'OFFLINE'],
  TIME_STAMP: '@datetime("T")'
}

// 用于过滤等utils
const mockUtils = {
  filterSearchKeyword (list, searchKeyword, keywordSearchKeys = []) {
    let result = list
    if (!keywordSearchKeys.length) { return result }
    result = list.filter(item => {
      return keywordSearchKeys.some(keyword => item[keyword].includes(searchKeyword))
    })
    return result
  },
  filterExactMatch (list, exactMatchArr) {
    if (!exactMatchArr || !exactMatchArr.length) { return list }
    const result = list.filter(item => {
      return exactMatchArr.every(exactItem => exactItem.valueArr.includes(item[exactItem.name]))
    })
    return result
  },
  sortResult (list, sort) {
    const result = list
    return result
  },
  getFilterList: function (list, config, keywordSearchKeys = []) {
    let result = list
    const { searchKeyword, exactMatchArr, sort } = JSON.parse(config.body)
    result = this.filterSearchKeyword(result, searchKeyword, keywordSearchKeys)
    result = this.filterExactMatch(result, exactMatchArr)
    result = this.sortResult(result, sort)
    return result
  },

  getListResponse: function (list, config) {
    const { page, limit } = JSON.parse(config.body)
    const pageFixed = page || 1
    const itemArr = list.slice((pageFixed - 1) * limit, pageFixed * limit)
    const total = list.length
    const content = { itemArr, total }
    return mockHelper.mockResponse({ content })
  },
  genListResponse: function (list, config, keywordSearchKeys = []) {
    const resultList = this.getFilterList(list, config, keywordSearchKeys)
    return this.getListResponse(resultList, config)
  }
}
export {
  mockPattern,
  mockUtils
}
