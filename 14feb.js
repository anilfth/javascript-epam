 // switch statement explanation
 const gadget = 'laptop'
switch(gadget){
    case 'laptop':
        console.log("laptop price is 900000")
        break;
        case 'smartphone':
            console.log("smartphone price is 80000")
            break;
            case 'charger':
                console.log("charger price is 1200")
                break;
                default:
                    console.log(`sorry ! ${gadget} is not available`)
                    break;

}
 // switch vs dictonary object
 let city = 'India'
  switch(city){
    case 'india':
        console.log('hi india')
        break;
        case 'America':
            console.log('Hi America')
            break;
            case 'China':
                console.log('Hi china')
                break;
                default:
                    console.log('welcome !')
                    break;
  }