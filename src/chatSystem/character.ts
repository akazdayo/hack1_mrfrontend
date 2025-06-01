
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { SystemMessage } from "@langchain/core/messages";


//　キャラクターの人格を形成するためのシステム







// LLM初期化
const llm_pro = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-preview-05-20",
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API, 
  temperature: 0.5,
  maxOutputTokens: 500,
});


const systemPrompt = `
あなたはキャラクターの人格を形成するためのシステムです。"キャラクターの設定を考えてください。ただし、このキャラクターは、基本的にMR空間とユーザーとの会話を通じて、ユーザに対して質問したり、ユーザーに勉強を教えてもらうようなキャラクターです。ユーザは友達です
キャラクターの話し方や、性格、特徴、趣味などを考えてください。ユーザーとの関係性は最初は浅いようにしてください。
`



const characterSystemPrompt = new SystemMessage(systemPrompt);
// llmにシステムプロンプトを設定

const prompt = ChatPromptTemplate.fromMessages([
  characterSystemPrompt,
  ["human", "{input}"], // ユーザーの入力
]);

// 関数の定義
