class OldCalc {
    operations(t1, t2, operation) {
    switch (operation) {
        case 'add': return t1 + t2
        case 'sub': return t1 - t2
        default: return NaN
    }
  }
}


class NewCalc {
 add(t1, t2) {
    return t1 + t2
    }

 sub(t1, t2) {
    return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return this.calc.add(t1, t2)
            case 'sub':
                return this.calc.sub(t1, t2)
            default:
                return NaN
        }

    }
}




const newCalc = new NewCalc()
console.log(newCalc.add(4, 6))

const oldCalc = new OldCalc()
console.log(oldCalc.operations(4, 6, 'add'))

const calcAdapter = new CalcAdapter()
console.log(calcAdapter.operations(4, 6, 'add'))
