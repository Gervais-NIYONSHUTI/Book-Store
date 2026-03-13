export const getDataByPathParams = (data, locationType, locationName) => {

  return data.filter((destination) => {
    return destination[locationType].toLowerCase() === locationName.toLowerCase()
  })

}
// 0798404743