use anchor_lang::prelude::*;

declare_id!("H1oAGzrNgjfXvwfMo1svhgFqcUTV8CaYf73s6TzVkNYd");

#[program]
pub mod transfer_hook_transfer_switch {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
