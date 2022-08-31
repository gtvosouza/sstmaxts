
export const objectSet = (data: any, key: string) : any => {
    let result = {};
    
    Object.keys(data).forEach((e, i) => {
        
        if(e !== "_id") {
            const element = `{"${key}.$.${e}" : "${data[e]}"}`;
            Object.assign(result, JSON.parse(element));
        }
    });

    return result
}