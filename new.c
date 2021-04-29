#include <stdio.h>
int main()
{
    freopen("ML3-input.txt","r",stdin);
    int row, col;
    scanf("%d %d", &row, &col);
    char arr[row][col];
    for (int i = 0; i < row; i++)
    {
        scanf("%s", &arr[i][0]);
    }
    int ans[2][row+1];
    ans[0][row]=-1;
    ans[1][row]=-1;
  
    int star = 0, minus = 0;

    for (int i = 0; i < row; i++)
    {
        star=0,minus=0;
        for (int j = 0; j < col - 1; j++)
        {
            if ((arr[i][j] == arr[i][j + 1]) && (arr[i][j] == '*'))
            {
                star = star + 1;
               
            }
            else if (arr[i][j] == arr[i][j + 1] && arr[i][j] == '-')
            {
                minus++;
            
            }
            ans[0][i]=star;
            ans[1][i]=minus;
        }
    }
    for(int i=0;i<2;i++){
        for(int j=0;j<row+1;j++){
            printf("%d ",ans[i][j]);
        }
        printf("\n");
    }
    return 0;
}