var ID = {}
ID.Item = {};
ID.Item.Rod = {};
ID.Item.Chunk = {};
ID.Item.PickaxeHead = {};
ID.Item.AxeHead = {};
ID.Item.ShovelHead = {};
ID.Item.ArrowHead = {};
ID.Item.ChiselHead = {};
ID.Item.ExcavatorHead = {};
ID.Item.FrypanHead = {};
ID.Item.HammerHead = {};
ID.Item.LumberAxeHead = {};
ID.Item.ScytheHead = {};
ID.Item.BattleSignHead = {};
ID.Item.Binding = {};
ID.Item.ToughBind = {};
ID.Item.ToughRod = {};
ID.Item.SwordBlade = {};
ID.Item.LargeSwordBlade = {};
ID.Item.KnifeBlade = {};
ID.Item.Bobber = {};
ID.Item.Crossbar = {};
ID.Item.FullGuard = {};
ID.Item.LargeGuard = {};
ID.Item.MediumGuard = {};
ID.Item.LargePlate = {};

ID.Item.Rod.Wood = 500;
ID.Item.Chunk.Wood = 501;
ID.Item.PickaxeHead.Wood = 502;
ID.Item.AxeHead.Wood = 503;
ID.Item.ShovelHead.Wood = 504;
ID.Item.ArrowHead.Wood = 505;
ID.Item.ChiselHead.Wood = 506;
ID.Item.ExcavatorHead.Wood = 507;
ID.Item.FrypanHead.Wood = 508;
ID.Item.HammerHead.Wood = 509;
ID.Item.LumberAxeHead.Wood = 510;
ID.Item.ScytheHead.Wood = 511;
ID.Item.BattleSignHead.Wood = 512;
ID.Item.Binding.Wood = 513;
ID.Item.ToughBind.Wood = 514;
ID.Item.ToughRod.Wood = 515;
ID.Item.SwordBlade.Wood = 516;
ID.Item.LargeSwordBlade.Wood = 517;
ID.Item.KnifeBlade.Wood = 518;
ID.Item.Bobber.Wood = 519;
ID.Item.Crossbar.Wood = 520;
ID.Item.FullGuard.Wood = 521;
ID.Item.LargeGuard.Wood = 522;
ID.Item.MediumGuard.Wood = 523;
ID.Item.LargePlate.Wood = 524;

ID.Item.Rod.Stone = 550;
ID.Item.Chunk.Stone = 551;

ID.Item.Rod.Iron = 600;
ID.Item.Chunk.Iron = 601;

ID.Item.Rod.Flint = 650;
ID.Item.Chunk.Flint = 651;

var Texture = {};
Texture.Item = {};
Texture.Item.Rod = {};
Texture.Item.Chunk = {};
Texture.Item.PickaxeHead = {};
Texture.Item.AxeHead = {};
Texture.Item.ShovelHead = {};
Texture.Item.ArrowHead = {};
Texture.Item.ChiselHead = {};
Texture.Item.ExcavatorHead = {};
Texture.Item.FrypanHead = {};
Texture.Item.HammerHead = {};
Texture.Item.LumberAxeHead = {};
Texture.Item.ScytheHead = {};
Texture.Item.BattleSignHead = {};
Texture.Item.Binding = {};
Texture.Item.ToughBind = {};
Texture.Item.ToughRod = {};
Texture.Item.SwordBlade = {};
Texture.Item.LargeSwordBlade = {};
Texture.Item.KnifeBlade = {};
Texture.Item.Bobber = {};
Texture.Item.Crossbar = {};
Texture.Item.FullGuard = {};
Texture.Item.LargeGuard = {};
Texture.Item.MediumGuard = {};
Texture.Item.LargePlate = {};

Texture.Item.Rod.Wood = "rod_wood";
Texture.Item.Chunk.Wood = "chunk_wood";
Texture.Item.PickaxeHead.Wood = "pickaxe_head_wood";
Texture.Item.AxeHead.Wood = "axe_head_wood";
Texture.Item.ShovelHead.Wood = "shovel_head_wood";
Texture.Item.ArrowHead.Wood = "arrow_head_wood";
Texture.Item.ChiselHead.Wood = "chisel_head_wood";
Texture.Item.ExcavatorHead.Wood = "excavator_head_wood";
Texture.Item.FrypanHead.Wood = "frypan_head_wood";
Texture.Item.HammerHead.Wood = "hammer_head_wood";
Texture.Item.LumberAxeHead.Wood = "lumberaxe_head_wood";
Texture.Item.ScytheHead.Wood = "scythe_head_wood";
Texture.Item.BattleSignHead.Wood = "battlesign_head_wood";
Texture.Item.Binding.Wood = "binding_wood";
Texture.Item.ToughBind.Wood = "toughbind_wood";
Texture.Item.ToughRod.Wood = "toughrod_wood";
Texture.Item.SwordBlade.Wood = "sword_blade_wood";
Texture.Item.LargeSwordBlade.Wood = "large_sword_blade_wood";
Texture.Item.KnifeBlade.Wood = "knife_blade_wood";
Texture.Item.Bobber.Wood = "bobber_wood";
Texture.Item.Crossbar.Wood = "crossbar_wood";
Texture.Item.FullGuard.Wood = "full_guard_wood";
Texture.Item.LargeGuard.Wood = "large_guard_wood";
Texture.Item.MediumGuard.Wood = "medium_guard_wood";
Texture.Item.LargePlate.Wood = "largeplate_wood";

Texture.Item.Rod.Stone = "rod_stone";
Texture.Item.Chunk.Stone = "chunk_stone";

Texture.Item.Rod.Iron = "rod_iron";
Texture.Item.Chunk.Iron = "chunk_iron";

Texture.Item.Rod.Flint = "rod_flint";
Texture.Item.Chunk.Flint = "chunk_flint";

var TinkersConstruct = {};

TinkersConstruct.setItem = function(id,texture,textureData,name,maxStackSize){ModPE.setItem(id,texture,textureData,name,maxStackSize);}
TinkersConstruct.setBlock = function(i,n,t,m,o,r,ll,lo,d,e){Block.defineBlock(i,n,t,m,o,r);Block.setLightLevel(i,ll);Block.seLightOpacity(i,lo);Block.setDestroyTime(i,d);Block.setExplosionResistance(i,e);}


TinkersConstruct.setItem(ID.Item.Rod.Wood,Texture.Item.Rod.Wood,0,"Wooden Rod",64);
TinkersConstruct.setItem(ID.Item.Chunk.Wood,Texture.Item.Chunk.Wood,0,"Wooden Chunk",64);
TinkersConstruct.setItem(ID.Item.PickaxeHead.Wood,Texture.Item.PickaxeHead.Wood,0,"Wooden Pickaxe Head",64);
TinkersConstruct.setItem(ID.Item.AxeHead.Wood,Texture.Item.AxeHead.Wood,0,"Wooden Axe Head",64);
TinkersConstruct.setItem(ID.Item.ShovelHead.Wood,Texture.Item.ShovelHead.Wood,0,"Wooden Shovel Head",64);
TinkersConstruct.setItem(ID.Item.ArrowHead.Wood,Texture.Item.ArrowHead.Wood,0,"Wooden Arrow Head",64);
TinkersConstruct.setItem(ID.Item.ChiselHead.Wood,Texture.Item.ChiselHead.Wood,0,"Wooden Chisel Head",64);
TinkersConstruct.setItem(ID.Item.ExcavatorHead.Wood,Texture.Item.ExcavatorHead.Wood,0,"Wooden Excavator Head",64);
TinkersConstruct.setItem(ID.Item.FrypanHead.Wood,Texture.Item.FrypanHead.Wood,0,"Wooden Frypan Head",64);
TinkersConstruct.setItem(ID.Item.HammerHead.Wood,Texture.Item.HammerHead.Wood,0,"Wooden Hammer Head",64);
TinkersConstruct.setItem(ID.Item.LumberAxeHead.Wood,Texture.Item.LumberAxeHead.Wood,0,"Wooden LumberAxe Head",64);
TinkersConstruct.setItem(ID.Item.ScytheHead.Wood,Texture.Item.ScytheHead.Wood,0,"Wooden Scythe Head",64);
TinkersConstruct.setItem(ID.Item.BattleSignHead.Wood,Texture.Item.BattleSignHead.Wood,0,"Wooden BattleSign Head",64);
TinkersConstruct.setItem(ID.Item.Binding.Wood,Texture.Item.Binding.Wood,0,"Wooden Binding",64);
TinkersConstruct.setItem(ID.Item.ToughBind.Wood,Texture.Item.ToughBind.Wood,0,"Wooden ToughBind",64);
TinkersConstruct.setItem(ID.Item.SwordBlade.Wood,Texture.Item.SwordBlade.Wood,0,"Wooden SwordBlade",64);
TinkersConstruct.setItem(ID.Item.LargeSwordBlade.Wood,Texture.Item.LargeSwordBlade.Wood,0,"Wooden Large SwordBlade",64);
TinkersConstruct.setItem(ID.Item.KnifeBlade.Wood,Texture.Item.KnifeBlade.Wood,0,"Wooden KnifeBlade",64);
TinkersConstruct.setItem(ID.Item.Bobber.Wood,Texture.Item.Bobber.Wood,0,"Wooden Bobber",64);
TinkersConstruct.setItem(ID.Item.Crossbar.Wood,Texture.Item.Crossbar.Wood,0,"Wooden Crossbar",64);
TinkersConstruct.setItem(ID.Item.FullGuard.Wood,Texture.Item.FullGuard.Wood,0,"Wooden FullGuard",64);
TinkersConstruct.setItem(ID.Item.LargeGuard.Wood,Texture.Item.LargeGuard.Wood,0,"Wooden LargeGuard",64);
TinkersConstruct.setItem(ID.Item.MediumGuard.Wood,Texture.Item.MediumGuard.Wood,0,"Wooden MediumGuard",64);
TinkersConstruct.setItem(ID.Item.LargePlate.Wood,Texture.Item.LargePlate.Wood,0,"Wooden Large Plate",64);


TinkersConstruct.setItem(ID.Item.Rod.Stone,Texture.Item.Rod.Stone,0,"Stone Rod",64);
TinkersConstruct.setItem(ID.Item.Chunk.Stone,Texture.Item.Chunk.Stone,0,"Stone Chunk",64);

TinkersConstruct.setItem(ID.Item.Rod.Iron,Texture.Item.Rod.Iron,0,"Iron Rod",64);
TinkersConstruct.setItem(ID.Item.Chunk.Iron,Texture.Item.Chunk.Iron,0,"Iron Chunk",64);

TinkersConstruct.setItem(ID.Item.Rod.Flint,Texture.Item.Rod.Flint,0,"Flint Rod",64);
TinkersConstruct.setItem(ID.Item.Chunk.Flint,Texture.Item.Chunk.Flint,0,"Flint Chunk",64);

