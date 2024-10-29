import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { TransferHookTransferSwitch } from "../target/types/transfer_hook_transfer_switch";

describe("transfer-hook-transfer-switch", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TransferHookTransferSwitch as Program<TransferHookTransferSwitch>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
