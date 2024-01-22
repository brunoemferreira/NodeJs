

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    // Faz a Leitura da Stream
    _read() {
        const i = this.index++
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        },1000)
    }

}

// instanciado a classe acima 
new OneToHundredStream()
    .pipe(process.stdout)