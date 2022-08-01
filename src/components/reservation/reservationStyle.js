import styled from "styled-components";

export const ReservationWrapper = styled.div``;

export const ReservationLeft = styled.div`
  flex: 1;
  background: #09192a;
  width: 100%;
  height: 1200px;
`;

export const ReservationNavigationToHome = styled.div`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  i {
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
  }

  h3 {
    color: #fff;
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-family: "Lato", sans-serif;
    font-weight: normal;
    margin-left: 20px;
    text-transform: capitalize;
  }
`;

export const ReservationRight = styled.div`
  flex: 4.5;
  padding: 3rem 2rem;
  min-height: 1200px;
  background: #e5ebf2;
`;

export const ReservationRightTop = styled.div`
  h1 {
    color: #333333;
    font-size: 36px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    line-height: 1.2rem;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

export const ReservationRightCenter = styled.div`
  gap: 2rem;
`;

export const ReservationRightCenterLeft = styled.div`
  width: 100%;
  height: max-content;
  flex: 1;
  border: 1px solid var(--color-link-blue);
  border-radius: 5px;
  gap: 1rem;
`;

export const Form = styled.form`
  padding: 0.5rem 1rem;
`;

export const FormGroup = styled.div`
  text-align: start;
  gap: 0.7rem;
  padding-bottom: 1rem;
`;

export const ReservationRightCenterRight = styled.div`
  width: 100%;
  height: max-content;
  flex: 1;
  border: 1px solid var(--color-link-blue);
  border-radius: 5px;
  gap: 1rem;
`;

export const CardTitle = styled.div`
  width: 100%;
  padding: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px 0 0;
  color: var(--white);
  background: var(--color-link-blue);
  letter-spacing: 1px;
`;
