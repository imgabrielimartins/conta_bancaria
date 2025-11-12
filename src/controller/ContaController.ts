import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    listaTodas(): void{
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastro(conta: Conta): void{
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\n A conta número: " + conta.numero +
            " foi criada com sucesso!", colors.reset);
    }

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodas(): void {
        throw new Error("Method not implemented.");
    }
    cadastrar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    /* Gerar numero da conta*/
    public gerarNumero(): number{
        return ++ this.numero;
    }

    /* Checa se uma conta existe */

    public buscarNoArray(numero: number): Conta | null{

        for (let conta of this.listaContas) {
            if(conta.numero === numero)
                return conta;
        }
        return null;
    }

    procuraPorNumero(numero: number): void{
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            buscaConta.visualizar();
        }else 
            console.log(colors.fg.red,"\nA conta numero: " + numero 
                + " não foi encontrada!", colors.reset);
    }

    atualizarConta(conta: Conta): void{
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA conta numero: " + conta.numero +
                " foi atualizada com sucesso!", colors.reset);
        }else
            console.log(colors.fg.red, "\nA conta numero: " + conta.numero + " não foi encontrada!", colors.reset);
    }

    deletarConta(numero: number): void{
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta != null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA conta numero: " + numero + " foi apagada com sucesso!" + colors.reset);
        }else
            console.log(colors.fg.red, "\nA conta numero: " + numero + " não foi encontrada!", colors.reset)
    }
    
}