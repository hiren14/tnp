type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

interface Post extends Base {
	author: Author;
	body: Block[];
	categories: Category[];
	mainImage: Image;
	slug: Slug;
	title: string;
	description: string;
	dinter:string;
    dlast:string;
    vac:string;
    bond:Block[];
    inter:Block[];
    quali:string;
    sel:string;
    elig:string;
    package: Block[];
    gurl:string;
    loc:string;
    companyname: string;
    job: Block[];

}

interface Author extends Base {
	bio: Block[];
	image: Image;
	name: string;
	slug: Slug;
}

interface Image {
	_type: "image";
	asset: Reference;
}

interface Reference {
	_ref: string;
	_type: "reference";
}

interface Slug {
	_type: "slug";
	current: string;
}

interface Block {
	_key: string;
	_type: "block";
	children: Span[];
	markDefs: any[];
	style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
	_key: string;
	_type: "span";
	marks: string[];
	text: string;
}

interface Category extends Base {
	title: string;
	description: string;
}

interface MainImage {
	_type: "image";
	asset: Reference;
}

interface Title {
	_type: "string";
	current: string;
}
interface Placed {
	_id: string;
	  companyname:string;
	  slug: Slug;
		simg: IImage;
		sdatas: ISdata[];
		splaced: ISPlaced[];
		name: string;
		position:string;
		linkedln:string;
		companyname:string;
		year:string;
		package:string;
		simg: IImage;
	
		slug: {
			current: string;
		  };
		
   }
   interface ISPlaced {
    name: string;
    position:string;
    linkedln:string;
    companyname:string;
    year:string;
    package:string;
    simg: IImage;

  
}
interface ISdata {
    name: string;
    position:string;
    linkedln:string;
    companyname:string;
    year:string;
    package:string;
    simg: IImage;

    slug: {
        current: string;
      };
}