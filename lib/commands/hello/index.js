import { Args, Command, Flags } from '@oclif/core';
class Hello extends Command {
    async run() {
        const { args, flags } = await this.parse(Hello);
        this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`);
    }
}
Hello.args = {
    person: Args.string({ description: 'Person to say hello to', required: true }),
};
Hello.description = 'Say hello';
Hello.examples = [
    `<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
];
Hello.flags = {
    from: Flags.string({ char: 'f', description: 'Who is saying hello', required: true }),
};
export default Hello;
