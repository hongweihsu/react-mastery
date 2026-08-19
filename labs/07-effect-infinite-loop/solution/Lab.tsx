/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - 每次 render 建立新的 options object reference。
 * - dependency changed → Effect → state update → render 形成 feedback loop。
 * - 正確問題是 Effect 是否必要，而非如何欺騙 dependency array。
 */
export default function Lab(){const options={mode:"active"};return <section><h2>Mode: {options.mode}</h2><p>No external system existed, so the correct fix removes the Effect and duplicated state.</p></section>}
