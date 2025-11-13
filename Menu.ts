import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastro(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastro(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastro(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastro(cp2);

contas.listaTodas();

    while (true){
        
        console.log(colors.bg.black, colors.fg.yellow);
        console.log("********************************************************************");
        console.log("                                                                    ");
        console.log("                                                                    ");
        console.log("                        BANCO DO BRAZIL COM Z                       ");
        console.log("                                                                    ");
        console.log("********************************************************************");
        console.log("                                                                    ");
        console.log("                       1 - Criar Conta                              ");
        console.log("                       2 - Listar todas as Contas                   ");
        console.log("                       3 - Buscar Conta por Numero                  ");
        console.log("                       4 - Atualizar Dados da Conta                 ");
        console.log("                       5 - Apagar Conta                             ");
        console.log("                       6 - Sacar                                    ");
        console.log("                       7 - Depositar                                ");
        console.log("                       8 - Transferir valores entre Contas          ");
        console.log("                       9 - Sair                                     ");
        console.log("                                                                    ");
        console.log("********************************************************************");
        console.log("                                                                    ", 
        colors.reset);

            console.log("Entre com a opcao desejada: ");
            opcao = readlinesync.questionInt("");

            if (opcao == 9){
                console.log(colors.fg.greenstrong,
                    "\n Banco do Brazil com Z - o seu Futuro começa aqui!");
                sobre();
                console.log(colors.reset, "");
                process.exit(0);
            }

        switch(opcao){
            case 1: 
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                    console.log("\nDigite o número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("\nDigite o nome do titular da conta: ");
                    titular = readlinesync.question("");

                    console.log("\nDigite o tipo da conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                    console.log("\nDigite o saldo da conta(R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch(tipo){
                        case 1:
                            console.log("Digite o limite da conta(R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.cadastro(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                        saldo, limite));
                        break;
                        case 2:
                            console.log("Digite o dia do aniversario da conta poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.cadastro(new ContaPoupanca(contas.gerarNumero(), agencia, tipo,
                        titular, saldo, aniversario));
                        break;
                    }

                keyPress()
                break;
            case 2: 
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                
                    contas.listaTodas();

                keyPress()
                break;
            case 3: 
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por numero\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.procuraPorNumero(numero);

                keyPress()
                break;
            case 4: 
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                   console.log("Digite o numero da conta: ");
                   numero = readlinesync.questionInt("");

                   let conta = contas.buscarNoArray(numero);

                   if (conta != null){
                    console.log("Digite o numero da agencia: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o nome do titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\n Digite o saldo da conta(R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch(tipo){
                        case 1:
                            console.log("Digite o limite da conta(R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizarConta(
                            new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                        break;
                        case 2:
                            console.log("Digite o dia do aniversario da conta poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                        break;     
                    }
                   }else{
                    console.log(colors.fg.red, "\nA conta numero: " + numero + " não foi encontrada!", colors.reset);
                   }

                keyPress()
                break;  
            case 5: 
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);
                    
                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");
                    contas.deletarConta(numero);
                    
                keyPress()
                break;  
            case 6: 
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                    console.log("Digite  o numero da conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do saque (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.sacar1(numero,valor);

                keyPress()
                break;
            case 7: 
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                    console.log("Digite o numero da conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o valor do deposito (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.depositar1(numero, valor);

                keyPress()
                break;
            case 8: 
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                    console.log("Digite o numero da conta origem: ");
                    numero = readlinesync.questionInt("");

                    console.log("\nDigite o numero da conta de destino: ");
                    numeroDestino = readlinesync.questionInt("");

                    console.log("\nDigite o valor do depósito (R$): ");
                    valor = readlinesync.questionFloat("");

                    contas.transferir1(numero, numeroDestino, valor)
                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida\n", colors.reset);

                keyPress()
                break;
        }
    }

}    


export function sobre(): void{
    console.log("\n*******************************************************");
    console.log("Projeto Desenvolvido por: Gabrieli Martins");
    console.log("Generation Brasil - gabrielidelimamartins@gmail.com");
    console.log("github.com/imgabrielimartins");
    console.log("*********************************************************");
}

main();

function keyPress(): void{
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}