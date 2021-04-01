let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

for (let item in info) {
  if (info[item] === info.recorrente && info[item] === 'sim' && info2[item] === 'sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[item] + ' e ' + info2[item]);
  }
}
  