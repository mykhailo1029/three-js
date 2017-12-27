import MnemonicX86 from '../../x86/MnemonicX86';
import MnemonicVariationsX86 from '../../x86/MnemonicVariationsX86';
import * as a from '../atoms';

const mnemonic_add_0 = new MnemonicX86;
mnemonic_add_0.opcode = 3950;
mnemonic_add_0.operands = [[a.mm], [a.r, a.m]];

const mnemonic_add_1 = new MnemonicX86;
mnemonic_add_1.opcode = 3966;
mnemonic_add_1.operands = [[a.r, a.m], [a.mm]];

const mnemonic_add_2 = new MnemonicX86;
mnemonic_add_2.opcode = 3950;
mnemonic_add_2.operands = [[a.xmm], [a.r, a.m]];

const mnemonic_add_3 = new MnemonicX86;
mnemonic_add_3.opcode = 3966;
mnemonic_add_3.operands = [[a.r, a.m], [a.xmm]];

const mnemonic_add_4 = new MnemonicX86;
mnemonic_add_4.opcode = 3951;
mnemonic_add_4.operands = [[a.mm], [a.mm, a.m]];

const mnemonic_add_5 = new MnemonicX86;
mnemonic_add_5.opcode = 3967;
mnemonic_add_5.operands = [[a.mm, a.m], [a.mm]];

const mnemonic_add_6 = new MnemonicX86;
mnemonic_add_6.opcode = 15929214;
mnemonic_add_6.operands = [[a.xmm], [a.xmm, a.m]];

const mnemonic_add_7 = new MnemonicX86;
mnemonic_add_7.opcode = 6688726;
mnemonic_add_7.operands = [[a.xmm, a.m], [a.xmm]];

const x86_mnemonic_variations_movq = new MnemonicVariationsX86([
    mnemonic_add_0,
    mnemonic_add_1,
    mnemonic_add_2,
    mnemonic_add_3,
    mnemonic_add_4,
    mnemonic_add_5,
    mnemonic_add_6,
    mnemonic_add_7,
]);
x86_mnemonic_variations_movq.defaultOperandSize = 32;

export default x86_mnemonic_variations_movq;
