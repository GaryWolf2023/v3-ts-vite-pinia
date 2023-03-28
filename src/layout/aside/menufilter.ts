
export function getMenuList(list :object[]) :object[] {
    let menuArr :object[] 
    list.forEach((it :object) :void => {
        menuArr.push({
            path: ''
        })
    })
    return menuArr
} 