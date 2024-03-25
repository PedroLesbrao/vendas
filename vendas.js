var sProdutos = [["placadeVideo.jpg",
                  "Placa de Vídeo VGA Galax NVIDIA GeForce GT 1030 2GB DDR5 64Bits Exoc",
                  "514,90"],
                 ["prod2.jpg","Processador AMD Ryzen 5 3600 Cache 32MB 3.6GHz(4.2GHz Max Turbo)","1399"],
                 ["prod3.jpg","SSD Crucial BX 500, 120GB, SATA, Leitura 540MB/s, Gravação","199"],
                 ["prod4.jpg","Placa-Mãe Gigabyte H310M H 2.0, Intel LGA 1151, mATX, DDR4 (Rev. 1.0)","458,71"],
                 ["prod5.jpg","Headset Gamer Razer Kraken X, P2, Drivers 40mm, Mercury White - RZ04-02890300-R3U1","411,65"]               
                ];

function criaTabela(){
    var tabela = document.getElementById("produtos");
    for(var i=0;i<sProdutos.length;i++){
        //criar a linha
        var linha = document.createElement("tr");
        linha.setAttribute("class","linha");
        tabela.appendChild(linha);

        //Criar coluna da foto
        var coluna1 = document.createElement("td");
        coluna1.setAttribute("class","tdfoto");
        coluna1.setAttribute("id","tdfoto"+i);
        linha.appendChild(coluna1);
        //Após criar a coluna, criamos a imagem
        var foto = id("tdfoto"+i);
        fotoPro = document.createElement("img");
        fotoPro.setAttribute("id","foto"+i);
        foto.appendChild(fotoPro);

        //Criar coluna da descrição
        var coluna2 = document.createElement("td");
        coluna2.setAttribute("class","tddescricao");
        coluna2.setAttribute("id","tddescricao"+i);
        linha.appendChild(coluna2);
        //Após criar a coluna, criamos a parágrafo
        var descricao = id("tddescricao"+i);
        descPro = document.createElement("p");
        descPro.setAttribute("id","descricao"+i);
        descricao.appendChild(descPro);

        //Criar coluna do valor
        var coluna3 = document.createElement("td");
        coluna3.setAttribute("class","tdpreco");
        coluna3.setAttribute("id","tdpreco"+i);
        linha.appendChild(coluna3);
        //Após criar a coluna, criamos a parágrafo
        var preco = id("tdpreco"+i);
        precoPro = document.createElement("p");
        precoPro.setAttribute("id","preco"+i);
        preco.appendChild(precoPro);

        //Coluna do botão
        var coluna4 = document.createElement("td");
        coluna4.setAttribute("class","tdbotao");
        coluna4.setAttribute("id","tdbotao"+i);
        linha.appendChild(coluna4);
        tabela.appendChild(linha);
        //Após criar a coluna, criamos o botao
        var botao = id("tdbotao"+i);
        botaoPro = document.createElement("button");
        botaoPro.setAttribute("type","button");
        botaoPro.setAttribute("id","venda"+i);
        botao.appendChild(botaoPro);
        id("venda"+i).innerHTML="COMPRAR";

        //Linha de divisão dos sProdutos
        linha = document.createElement("tr");
        linha.setAttribute("class","linha");
        tabela.appendChild(linha);
        var coluna = document.createElement("td");
        coluna.setAttribute("class","divisao");
        coluna.setAttribute("id","divisao"+i);
        coluna.setAttribute("colspan",4);
        linha.appendChild(coluna);

        var lin = id("divisao"+i);
        var divide = document.createElement("hr");
        divide.setAttribute("class","linhahr"+i);
        lin.appendChild(divide);

        tabela.appendChild(linha);
    }
    montaVenda();
}

function montaVenda(){
    for(var i=0;i<sProdutos.length;i++){
        console.log(sProdutos[i][0]+" ---- "+sProdutos[i][1]+" --- "+sProdutos[i][2]);
        id("foto"+i).src="imagens/"+sProdutos[i][0];
        id("descricao"+i).innerHTML = sProdutos[i][1];
        id("preco"+i).innerHTML = sProdutos[i][2];
    }
}

function id(sId){
    return document.getElementById(sId);
}