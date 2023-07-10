import styled  from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size: 3rem;
`;
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`;
const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img{
        max-width: 70%
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart(){
        addProduct(product._id);
    }
    return(
        <Bg>
            <Center>
                <ColumnWrapper>
                   <Column>
                   <div>
                        <Title>{product.title}</Title>
                        <Desc>{product.description}</Desc>
                        <ButtonsWrapper>
                            <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                            <Button white onClick={addFeaturedToCart}>
                                <CartIcon/>
                                Add to cart
                            </Button>
                        </ButtonsWrapper>
                   </div>
                   </Column>
                   <Column>
                    <img src="https://next-cupang.s3.amazonaws.com/1688662178884.jpg" alt=""/>
                    </Column> 
                </ColumnWrapper>
            </Center>
        </Bg>
    );
}