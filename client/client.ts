import * as anchor from "@coral-xyz/anchor";
import type { CryptoRankets } from "../target/types/crypto_rankets";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.CryptoRankets as anchor.Program<CryptoRankets>;

