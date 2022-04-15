export const fetchDispensaries = () => {
    return $.ajax({
        method: GET,
        url: '/api/dispensaries',
        error: (err) => console.log(err)
    })
}