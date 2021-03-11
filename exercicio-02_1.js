var balas, amigos, faltantes, sobram;

balas = prompt("Digite a quantidade de balas: ")
amigos = prompt("Digite a quantidade de amigos:")

sobram = balas % amigos

faltantes = amigos - sobram

alert(faltantes)