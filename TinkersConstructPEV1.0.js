var ID = {
  Item = {
    Rod = {
      Wood: 500,
      Stone: 550,
      Iron: 600
    };
    Chunk = {
      Wood: 501
    };
  };
  Tile = {
    
  };
};

var Texture = {
  Item = {
    Rod = {
      Wood: "rod_wood",
      Stone: "rod_stone",
      Iron: "rod_iron"
    };
    Chunk = {
      Wood: "chunk_wood"
    };
  };
  Tile = {
    
  };
};

var TinkersConstruct = {
  setItem = function(id,texture,textureData,name,maxStackSize){
    ModPE.setItem(id,texture,textureData,name,maxStackSize);
  };
};

TinkersConstruct.setItem(ID.Item.Rod.Wood,Texture.Item.Rod.Wood,0,"Wooden Rod",64)
