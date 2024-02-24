import Link from "next/link"

export const VanyaHeader = () => {
	return (<header className="flex flex-col items-center px-4 py-16 min-h-[28rem] gap-8 justify-center border-b border-border">
		<div className="text-sm md:text-md rounded-2xl px-4 py-1 bg-yellow-100">🚀 Vanya is an experimental project</div>

		<h1 className="text-5xl px-6 md:text-8xl font-black text-center w-screen md:max-w-5xl text-gray-800">Tell your <strong className="moving-bg bg-clip-text text-transparent">story</strong>, Reflect your <strong className="border-b-8 border-primary">brand</strong></h1>

		<p className="text-lg px-6 text-gray-400 w-screen max-w-2xl text-center">Differentiate from the crowd with closely knitted components that come together to tell your incredible story.</p>

		<div className="flex flex-col md:flex-row gap-4">
			<Link href={"/docs"}><button className="btn w-40 btn-lg btn-primary">
				Get Started
			</button></Link>
			<Link href={"/registry"}><button className="btn btn-ghost w-40 btn-lg">
				Components
			</button></Link>
		</div>
	</header>)
}